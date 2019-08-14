class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.string :desc
      t.string :image_url

      t.timestamps
    end
  end
end
