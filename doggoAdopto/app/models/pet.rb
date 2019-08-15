class Pet < ApplicationRecord
  has_many :user_pets
  has_many :users, through: :user_pets
  
  validates :name, presence: true
end
