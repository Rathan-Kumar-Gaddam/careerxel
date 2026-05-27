module.exports = {
  register() {},
  async bootstrap({ strapi }) {
    try {
      const publicRole = await strapi.db.query("plugin::users-permissions.role").findOne({
        where: { type: "public" }
      });

      if (!publicRole) return;

      const actions = [
        "api::blog-post.blog-post.find",
        "api::blog-post.blog-post.findOne",
        "api::newsletter-subscriber.newsletter-subscriber.create"
      ];

      for (const action of actions) {
        const existing = await strapi.db.query("plugin::users-permissions.permission").findOne({
          where: { action, role: publicRole.id }
        });

        if (!existing) {
          await strapi.db.query("plugin::users-permissions.permission").create({
            data: { action, role: publicRole.id, enabled: true }
          });
          continue;
        }

        if (!existing.enabled) {
          await strapi.db.query("plugin::users-permissions.permission").update({
            where: { id: existing.id },
            data: { enabled: true }
          });
        }
      }
    } catch {
      strapi.log.warn("Could not auto-enable public permissions for blog and newsletter APIs.");
    }
  }
};
