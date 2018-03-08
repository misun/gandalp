class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.integer :owner_id
      t.string :name, null: false
      t.string :price_range
      t.string :category
      t.string :address
      t.string :phone
      t.string :monday
      t.string :tuesday
      t.string :wednesday
      t.string :thursday
      t.string :friday
      t.string :saturday
      t.string :sunday

      t.timestamps
    end
  end
end
