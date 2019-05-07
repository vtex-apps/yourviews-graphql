interface ReviewArgs {
  productId: string
}

export const review = async (_: any, args: ReviewArgs, ctx: Context) => {
  const data = await ctx.clients.yourviews.getReview(args.productId)
  console.log('data', data)
  return data
}

interface ReviewsArgs {
  productIds: string[]
}

export const reviews = async (_: any, args: ReviewsArgs, ctx: Context) => {
  const data = await ctx.clients.yourviews.getReviews(args.productIds)
  return data
}
