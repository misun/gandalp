class Api::BusinessesController < ApplicationController

  before_action :sanitize_page_params, only: [:create]

  def create
    @business = Business.new( business_params );

    if @business.save

      render :show
    else
      render json: { errors: @business.errors.full_messages}, status: 403
    end
  end

  def update
    @business = Business.find(params[:id])

    if @business.update(business_params)
      render :show
    else
      render json: { errors: @business.errors.full_messages }, status: 422
    end
  end

  def index
    @businesses = Business.all

    if @businesses
      render :index
    else
      render json: { errors: ['no businesses found']}, status: 404
    end
  end

  def show
    @business = Business.find(params[:id])
    @photos = @business.photos.map do |photo|
      photo.image.url
    end

    if @business
      render :show
    else
      redner json: { errors: ['no business found']}, status: 404
    end
  end

  def destroy
    business = Business.find(params[:id])

    # TODO: apply logic below
    #
    # if business && business.owner_id == current_user.id
    #   business.destroy();
    #   render json: {}
    # elsif business && business.owner_id != current_user.id
    #   render json: { errors: ['Destroy your own business']}, status: 403
    # else
    #   render json: { errors: ['no business found']}, status: 404
    # end

   if business
     business.destroy()
     render json: {}
   else
     render json: { errors: ['no business found']}, status: 404
   end

  end

  private

  def business_params
    params.require(:business).permit(:name, :price_range, :category, :address, :phone, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, :owner_id)
  end

  def sanitize_page_params
    params[:business][:owner_id] = params[:business][:owner_id].to_i
  end
end
