class Api::PhotosController < ApplicationController

  before_action :sanitize_page_params, only: [:create, :update]

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      render json: { errors: @photo.errors.full_messages }, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update(photo_params)
      render :show
    else
      render json: { errors: @photo.errors.full_messages }, status: 422
    end
  end

  def index
    # debugger
    if params[:business_id]
      @photos = Business.find(params[:business_id]).photos
    elsif params[:user_id]
      @photos = User.find(params[:user_id]).photos
    end

    render :index
  end

  def show
    @photo = Photo.find(params[:id])

    if @photo
      render :show
    else
      render json: { errors: ['no photo found']}, status: 404
    end
  end

  def destroy
    photo = Photo.find(params[:id])

    if photo
      photo.destroy()
      render json: {}
    else
      render json: { errors: ['no photo found']}, status: 404
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :business_id, :user_id)
  end

  def sanitize_page_params
    params[:photo][:user_id] = params[:photo][:user_id].to_i
    params[:photo][:business_id] = params[:photo][:business_id].to_i

    params[:business_id] = params[:business_id].to_i
    params[:user_id] = params[:user_id].to_i
  end
end
