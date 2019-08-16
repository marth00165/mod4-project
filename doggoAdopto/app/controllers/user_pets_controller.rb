class UserPetsController < ApplicationController

  def index
    @userpets = UserPet.all
    render json: @userpets, except: [:created_at, :updated_at]
  end

  def new
    @userpet = UserPet.new(petID: params[:petId], userID: params[:userID])
  end

  def show
    @userpet = UserPet.find_by(id: params[:id])
  end

  def create
    @userpet = UserPet.create(petID: params[:petId], userID: params[:userID])
        render json: @userpet
  end

end
