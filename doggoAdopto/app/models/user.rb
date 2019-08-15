class User < ApplicationRecord
  has_many :pets, through :user_pets

  validates :name, presence: true
  validates :at_least_18
  validates :username, {presence: true, uniqueness:true}
  validates :password_digest
  has_secure_password

  def at_least_18
    if self.age < 18
      errors.add(:age, "You must be 18 years or older.")
    end
  end



end
