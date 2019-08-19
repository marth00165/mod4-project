class TokensController < ApplicationController
  def index

  end
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      token = encode_token({id: user.id, username: user.username, name: user.name})
      render json: {
        jwt: token
      }
    else
      head :not_found
    end

  end


private


end
