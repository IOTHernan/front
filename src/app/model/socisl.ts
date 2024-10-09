export class Social {
	id?: number;
	linkedinURL: string;
	githubURL: string;
	xtwitter: string;
	sitesURL: string;
	youtubeURL: string;

	constructor(linkedinURL: string = '', githubURL: string = '', instagramURL: string = '',
		sitesURL: string = '', youtubeURL: string = '') {
		this.linkedinURL = linkedinURL;
		this.githubURL = githubURL;
		this.xtwitter = instagramURL;
		this.sitesURL = sitesURL;
		this.youtubeURL = youtubeURL;
	}
}
