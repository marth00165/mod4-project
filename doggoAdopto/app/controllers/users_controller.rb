class UsersController < ApplicationController

    def index
        @users = User.all
        userRender = @users.map{|user| jawn = {id: user.id, name: user.name, age: user.age, username:user.username, dogs:user.pet}}
        render json: userRender, except: [:created_at, :updated_at]
    end

    def show
        @user = User.find_by(id: params[:id])
        userRender = {id: @user.id, name:  @user.name, age: @user.age, username: @user.username, dogs: @user.pet}
        render json: userRender, except: [:created_at, :updated_at]
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
