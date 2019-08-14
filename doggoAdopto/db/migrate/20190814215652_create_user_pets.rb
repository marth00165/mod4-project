class CreateUserPets < ActiveRecord::Migration[5.2]
  def change
    create_table :user_pets do |t|
      t.integer :userID
      t.integer :petID

      t.timestamps
    end
  end
end
