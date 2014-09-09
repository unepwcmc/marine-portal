require 'rails_helper'

describe MapSearchController do

  before do
    create :dataset, title: 'first', creation_date: 2013
    create :dataset, title: 'second', creation_date: 2014
  end

  it 'search for all' do
    get :index, {sort_by: 'creation_date DESC'}

    expect(response.body).to have_json_path('0/id')
    expect(response.body).to have_json_type(Integer).at_path("0/id")
    expect(JSON.load(response.body)[0]['title']).to eq('second')
  end
end
