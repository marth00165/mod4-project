class UsersController < ApplicationController
    
    def index 
        @users = User.all
        render json: @users 
    end
    
    def show
        @user = User.find_by(id: params[:id])
        render json: @user
    end 

    def create
        @user = User.new(name: params[:name], username: params[:username], age: params[:age], password: params[:password_digest])     
    end 
end 
