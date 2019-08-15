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
    @pet.create(name: params[:name], breed: params[:breed], desc: params[:description], image_url:params[:image_url])
    render json: @pet, except: [:created_at, :updated_at]
  end

  def destroy
    @pet = Pet.find(params[:id])
    @pet.destroy
  end


end
