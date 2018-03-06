class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :f_name, null: false
      t.string :l_name, null: false
      t.string :zip_code

      t.timestamps
    end
  end
end
