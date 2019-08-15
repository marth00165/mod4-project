class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users, except: [:created_at, :updated_at]
    end

    def show
        @user = User.find_by(id: params[:id])
        render json: @user, except: [:created_at, :updated_at]
    end

    def new
        @user = User.new
        render json: @user, except: [:created_at, :updated_at]
    end

    def create
        @user = User.create(
            name: params[:name],
            username: params[:username],
            age: params[:age],
            password: params[:password]
        )
        render json: @user, except: [:created_at, :updated_at]
    end

    def destroy
      @user = User.find(params[:id])
      @user.destroy
    end
end
