class User < ApplicationRecord
  has_many :pets, through :user_pets
end
