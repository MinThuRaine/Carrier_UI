export interface WayListConfig {
  type: string;

  filters: {
    tag?: string,
    owner?: string,
    requested?: string,
    limit?: number,
    offset?: number
  };
}
