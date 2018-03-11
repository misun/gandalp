class AddUniqToUsername < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :username, unique: true
    add_index :businesses, :name
    add_index :photos, :img_url
  end
end
