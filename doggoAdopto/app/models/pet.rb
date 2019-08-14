class Pet < ApplicationRecord
  has_many :users, through :user_pets
end
