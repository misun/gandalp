class Api::UsersController < ApplicationController

  # before_action :require_login, only: [:show, :update, :destroy]

  def create
    @user = User.new(user_params);

    if @user.save
      login(@user)

      render :show, status:200
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])

    if @user
      render :show,  status:200
    else
      render json: ['no user found'], status: 404
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show, status:200
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])

    if user
      # logout
      user.destroy
      render json: {}
    else
      render json: { errors: ['no user found']}, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :f_name, :l_name, :zip_code)
  end
end
