class UsersController < ApplicationController

  before_action :require_current_user!, except: [:create, :new]

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      redirect_to root_url
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
