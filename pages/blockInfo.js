const { I } = inject();

module.exports = {

  backLink: {css: '#xxxxx > div.content.card > div.back > a'},

  blockTitle: {css: '#xxxxx > div.content.card > div.headline'},

  fields: {
  	height: {
  		text: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span:nth-child(2)'},
  		previous: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span.btn.btn-prev'},
  		next: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(1) > div.dictionary-pair-value > span.btn.btn-next'}
  	},
  	version: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(2) > div.dictionary-pair-value'},
  	timestamp: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(3) > div.dictionary-pair-value'},
  	transactions: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(4) > div.dictionary-pair-value'},
  	parentBlock: {
  		text: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(5) > div.dictionary-pair-value > div'},
  		copyButton: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(5) > div.dictionary-action > div'}
  	},
  	generator: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(6) > div.dictionary-pair-value > a'},
  	signature: {
  		text: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(7) > div.dictionary-pair-value > div'},
  		copyButton: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(7) > div.dictionary-action > div'}
  	},
  	size: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(8) > div.dictionary-pair-value'},
  	totalFee: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(9) > div.dictionary-pair-value'},
  	reward: {css: '#xxxxx > div.content.card > div.dictionary > div:nth-child(10) > div.dictionary-pair-value'}
  },

  transactionList: {
  	headline: {css: '#xxxxx > div.content.card > div.headline2'},
  	hideList: {css: '#xxxxx > div.content.card > div.headline2 > span.action'},
  	table: {css: '#xxxxx > div.content.card > table'}
  },

  blockNotFound: {
  	icon: {css: 'div.panel-empty.error > div.icon.generic-icon'},
  	errorText: {css: 'div.panel-empty.error > div.line.wide.panel-empty-label > label'}
  }
}
