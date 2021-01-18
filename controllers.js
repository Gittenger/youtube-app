require('dotenv').config()
const { google } = require('googleapis')
const catchAsync = require('./utils/catchAsync')

const key = process.env.YOUTUBE_TOKEN
const query = 'Hall of Poi'

exports.getData = catchAsync(async (req, res, next) => {
	const channels = await google.youtube('v3').search.list({
		key,
		part: ['snippet', 'id'],
		q: query,
		maxResults: 5,
		type: 'channel',
	})

	const channelId = channels.data.items[0].id.channelId

	const playlists = await google.youtube('v3').playlists.list({
		key,
		channelId,
		part: ['snippet', 'contentDetails'],
		maxResults: 5,
	})

	const playlistData = playlists.data.items.map(
		({ snippet, contentDetails }) => ({
			image: snippet.thumbnails.high.url,
			title: snippet.title,
			length: contentDetails.itemCount,
		})
	)

	res.status(200).json({
		status: 'success',
		data: playlistData,
	})
})
