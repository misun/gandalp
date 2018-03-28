class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json:{ errors: @review.errors.full_messages }, status: 403
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: { errors: @review.errors.full_messages }, status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])

    # TODO: apply this logic

    # if review && review.user_id == current_user.id
    #   review.destroy();
    #   render json: {}
    # elsif review && review.user_id != current_user.id
    #   render json: { errors: ['Destroy your own review']}, status: 403
    # else
    #   render json: { errors: ['no review found']}, status: 404
    # end

    if review
      review.destroy();
      render json: {}
    else
      render json: { errors: ['no review found']}, status: 404
    end

  end

  private

  def review_params
    params.require(:review).permit(:user_id, :business_id, :rating, :body, :image)
  end
end
