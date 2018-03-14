class DeletePaperclipFromBiz < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :image_file_name
    remove_column :businesses, :image_content_type
    remove_column :businesses, :image_file_size
    remove_column :businesses, :image_updated_at
    remove_column :photos, :user_id
  end
end
