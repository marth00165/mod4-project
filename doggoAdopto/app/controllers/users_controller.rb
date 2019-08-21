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
        @user = User.new(
            name: params[:name],
            username: params[:username],
            age: params[:age],
            password: params[:password]
        )
        if @user.save
          render json: @user, except: [:created_at, :updated_at]

      else
        puts "in error block"
        render json: {message: "There was an error", success: false, data: @user.errors}, status: 406
          end
    end

    def update
      @user = User.find_by(id: params[:id])
      @user.name = params[:name]
      @user.password = params[:password]
      @user.save
      render json: @user, except: [:created_at, :updated_at]
    end

    def destroy
      @user = User.find(params[:id])
      @user.destroy
    end
end
