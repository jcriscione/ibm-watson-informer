let fs = require('fs')

var configJson = null

try {
	configJson = JSON.parse(fs.readFileSync('./config.json').toString())
} catch(e) {
	console.info('Could not load config.json file. Trying to get config from other place')
}

let fromConfigJson = {
	getWatsonConversationCredentials() {
		return configJson && configJson.watsonConversation.credentials
	},

	getWatsonConversationWorkspaceId() {
		return configJson && configJson.watsonConversation.workspaceId
	},

	discovery: {
	    credentials() {
            return configJson && configJson.watsonDiscovery.credentials
        },

	    collectionId: function() {
            return configJson && configJson.watsonDiscovery.collectionId
	    },

	    environmentId: function() {
            return configJson && configJson.watsonDiscovery.environmentId
	    }
	},

	rnr: {
	    credentials() {
            return configJson && configJson.watsonRetreiveAndRank.credentials
        },

        collectionName: function() {
            return configJson && configJson.watsonRetreiveAndRank.collectionName
        },

        solrClusterId: function() {
            return configJson && configJson.watsonRetreiveAndRank.solrClusterId
        },

        rankerId: function() {
            return configJson && configJson.watsonRetreiveAndRank.rankerId
        }
	}

}

let config = {
	getWatsonConversationCredentials: function() {
		//process.env.MONGO_URL

		return fromConfigJson.getWatsonConversationCredentials()
	},

	getWatsonConversationWorkspaceId: function() {
		return fromConfigJson.getWatsonConversationWorkspaceId()
	},

	discovery: {
	    credentials: function() {
            return fromConfigJson.discovery.credentials()
        },

        collectionId: function() {
            return fromConfigJson.discovery.collectionId()
        },

        environmentId: function() {
            return fromConfigJson.discovery.environmentId()
        }
	},

	rnr: {
	    credentials: function() {
            return fromConfigJson.rnr.credentials()
        },

        collectionName: function() {
            return fromConfigJson.rnr.collectionName()
        },

        solrClusterId: function() {
            return fromConfigJson.rnr.solrClusterId()
        },

        rankerId: function() {
            return fromConfigJson.rnr.rankerId()
        }
	}

};


module.exports = config;