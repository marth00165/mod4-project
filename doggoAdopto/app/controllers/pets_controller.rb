class PetsController < ApplicationController
  def index
    @pets = Pet.all
    render json: @pets, except: [:created_at, :updated_at]
  end

  def show
    @pet = Pet.find_by(id: params[:id])
    render json: @pet, except: [:created_at, :updated_at]
  end

  def new
    @pet = Pet.new
    render json: @pet, except: [:created_at, :updated_at]
  end

  def create
    @pet = Pet.create(name: params[:name], breed: params[:breed], desc: params[:desc], image_url: params[:image_url], user_id: params[:user_id])
    render json: @pet, except: [:created_at, :updated_at]
  end

  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
  end


end
