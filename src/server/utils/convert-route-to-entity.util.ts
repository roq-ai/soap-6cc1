const mapping: Record<string, string> = {
  businesses: 'business',
  services: 'service',
  subscriptions: 'subscription',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
