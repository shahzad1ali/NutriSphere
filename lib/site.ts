const defaultSiteUrl = "https://nutrisphere.example";

// TODO: Set NEXT_PUBLIC_SITE_URL to the verified public HTTPS origin before deployment.
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl,
);

export const siteOrigin = siteUrl.origin;
