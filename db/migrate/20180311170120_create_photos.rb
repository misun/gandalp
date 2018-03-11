class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :img_url, null: false
      t.integer :user_id
      t.integer :business_id

      t.timestamps
    end
  end
end
