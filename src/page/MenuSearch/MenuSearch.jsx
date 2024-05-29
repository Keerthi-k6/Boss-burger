import React ,{useEffect, useReducer}from 'react'
import MenuCards from '../../components/MenuCards/MenuCards';
import Search from '../../components/Search/Search';
import { getAll, getAllByTag, getAllTags, search } from '../../services/foodService';
import { useParams } from 'react-router-dom';
import Tags from '../../components/Tags/Tags';
import NotFound from '../../components/NotFound/NotFound';
const initialState = {foods:[],tags:[]};
const reducer = (state, action) => {
  switch (action.type) {
    case 'FOOD_LOADED':
      return {...state,foods: action.payload};
    case 'TAGS_LOADED':
      return {...state,tags: action.payload};
    default:
      return state;
  }
}
const MenuSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {foods,tags} = state;
    const {searchTerm,tag} =  useParams()
    useEffect(()=>
    {
      getAllTags().then(tags=> dispatch({type: 'TAGS_LOADED', payload: tags}))
      const loadedFoods = tag ? getAllByTag(tag):searchTerm ? search(searchTerm):getAll();

      loadedFoods.then(foods=> dispatch({type: 'FOOD_LOADED', payload: foods}))
    },[searchTerm,tag])
    return (
    <div>
      <Search/>
      <Tags tags={tags}/>
      {
        foods.length === 0 ? <NotFound linkText={'Reset Search'} linkRoute={'/menu'}/> : <MenuCards foods={foods}/>
      }
      
    </div>
  )
}

export default MenuSearch
