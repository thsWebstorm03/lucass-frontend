import { combineReducers } from '@reduxjs/toolkit'
import blogIdeas from 'src/store/apps/blog-tools/blog-ideas'

export default combineReducers({
   blogIdeas : blogIdeas
})