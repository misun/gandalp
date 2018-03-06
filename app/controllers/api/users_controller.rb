class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params);

    if @user.save
      login(user)
      # render :show
      render json: { id: @user.id, username: @user.username}
    else
      render json:{ errors: @user.errors.full_messages, status: 403 }
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :f_name, :l_name, :zip_code)
  end
end
