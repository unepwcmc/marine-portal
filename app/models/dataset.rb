class Dataset < ActiveRecord::Base
  belongs_to :licence
  has_many :customers
  has_many :datasets_decisions
  has_many :decisions, :through => :datasets_decisions

  validates_presence_of :title, :short_desc, :long_desc, :metadata_description, :licence
  validates_format_of :wms_server, :wfs, :meta_download, :with => /\A((http|https):\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z0-9]{1,5}(:[0-9]{1,5})?(\/.*)?\z/, :allow_blank => true

  before_save :strip_urls

  has_attached_file :html
  has_attached_file :xml
  has_attached_file :factsheet

  private

  def strip_urls
    [wms_name, wms_server].each {|s| s.strip!}
  end
end
