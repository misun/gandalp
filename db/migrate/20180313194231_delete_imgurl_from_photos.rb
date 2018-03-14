class DeleteImgurlFromPhotos < ActiveRecord::Migration[5.1]
  def change
    remove_column :photos, :img_url
  end
end
