# == Schema Information
#
# Table name: businesses
#
#  id          :integer          not null, primary key
#  owner_id    :integer
#  name        :string           not null
#  price_range :string
#  category    :string
#  address     :string
#  phone       :string
#  monday      :string
#  tuesday     :string
#  wednesday   :string
#  thursday    :string
#  friday      :string
#  saturday    :string
#  sunday      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
