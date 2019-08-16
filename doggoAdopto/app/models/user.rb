class User < ApplicationRecord
  has_many :pet

  validates :name, presence: true
  validate :at_least_18
  validates :username, {presence: true, uniqueness:true}
  has_secure_password

  def at_least_18
    if self.age < 18
      errors.add(:age, "You must be 18 years or older.")
    end
  end

end
