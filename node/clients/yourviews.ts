import { ExternalClient, InstanceOptions, IOContext, RequestConfig } from '@vtex/api'

export default class YourViewsClient extends ExternalClient {
  public appId?: string
  public token?: string

  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://service.yourviews.com.br', context, options)
  }

  // This is initialized by the withSecretKeys directive
  public init(secretKeys: SecretKeys) {
    this.appId = secretKeys.appId
    this.token = secretKeys.yourviewsToken
  }

  public async getReview (productId: string): Promise<string> {
    return this.get(this.routes.review(productId), {
      metric: 'yourviews-get-review',
    })
  }

  public async getReviews (productIds: string[]): Promise<string> {
    return this.get(this.routes.reviews(productIds), {
      metric: 'yourviews-get-reviews',
    })
  }

  private get routes () {
    return {
      // Review endpoints
      review: (productId: string) => `http://service.yourviews.com.br/api/${this.appId}/review/reviewshelf?productIds=${productId}`,
      reviews: (productIds: string[]) => `http://service.yourviews.com.br/api/${this.appId}/review/reviewshelf?productIds=${productIds.join(',')}`,
    }
  }

  private get (url: string, config?: RequestConfig) {
    return this.http.get(url, {
      ...config,
      headers: {
        Accept: 'application/json',
        'Authorization': this.token,
        'Content-Type': 'application/json',
      },
    })
  }
}
