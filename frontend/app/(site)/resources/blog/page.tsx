import type { Metadata } from "next";
import Link from "next/link";
import { ResourcesBlog } from "@/components/resources-blog";
import { getResourcesBlogArchive } from "@/lib/resources";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Blog",
    description: "Essays, field notes, and hiring insights from CareerXel.",
    alternates: { canonical: "/resources/blog" },
    openGraph: {
      title: "Blog | CareerXel",
      description: "Essays, field notes, and hiring insights from CareerXel.",
      url: "/resources/blog"
    }
  };
}

export default async function ResourcesBlogArchivePage() {
  const { blogPosts, categories, blog } = await getResourcesBlogArchive();
  const count = blogPosts.length;
  const countLabel = count === 1 ? "1 article" : `${count} articles`;

  return (
    <main className="relative page-resources page-resources-blog">
      <section className="dark-mesh res-blog-archive-hero">
        <div className="container">
          <nav className="res-blog-breadcrumb" aria-label="Breadcrumb">
            <Link href="/resources">Resources</Link>
            <span className="res-blog-breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span aria-current="page">Blog</span>
          </nav>

          <div className="serif-kicker">The full archive.</div>
          <h1 className="display res-blog-archive-title">
            <span className="bone-grad">Every essay,</span>
            <br />
            <span className="muted-weight">in one place.</span>
          </h1>
          <p className="subhead res-blog-archive-subhead">
            {count > 0
              ? `${countLabel} — essays, field notes, and case studies from the CareerXel team.`
              : "New essays publish here as we ship and learn."}
          </p>
        </div>
      </section>

      <ResourcesBlog
        posts={blogPosts}
        categories={categories}
        blog={blog}
        mode="archive"
        totalCount={count}
      />
    </main>
  );
}
