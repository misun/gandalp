class Api::BusinessesController < ApplicationController

  before_action :sanitize_page_params

  def create
    @business = Business.new( business_params );

    if @business.save

      render :show
    else
      render json: { errors: @business.errors.full_messages, status: 401 }
    end
  end

  def update
  end

  def index
  end

  def show
  end

  def destroy
  end

  private

  def business_params
    params.require(:business).permit(:name, :price_range, :category, :address, :phone, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, :owner_id)
  end

  def sanitize_page_params
    params[:business][:owner_id] = params[:business][:owner_id].to_i
  end
end
