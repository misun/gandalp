# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  img_url     :string           not null
#  user_id     :integer
#  business_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
