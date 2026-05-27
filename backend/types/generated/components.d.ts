import type { Schema, Struct } from '@strapi/strapi';

export interface MarketingFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_marketing_feature_cards';
  info: {
    description: 'A compact feature card used by marketing pages';
    displayName: 'Feature Card';
  };
  attributes: {
    tag: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'marketing.feature-card': MarketingFeatureCard;
    }
  }
}
