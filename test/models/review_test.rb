# == Schema Information
#
# Table name: reviews
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  business_id        :integer          not null
#  rating             :integer
#  body               :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
