import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

	// Ensemble des posts du blog
  posts = [
  	{
  		title: "Bonjour",
  		content: "Angular c'est génial !!!",
  		loveIts: 0,
  		created_at: new Date()
  	},
  	{
  		title: "Phase d'apprentissage",
  		content: "Premier mini-projet Angular :)",
  		loveIts: 0,
  		created_at: new Date()
  	},
  	{
  		title: "Angular, je kiffe !",
  		content: "Je passe bientot aux services ;)",
  		loveIts: 0,
  		created_at: new Date()
  	},
  	{
  		title: "Au revoir",
  		content: "Angular c'est toujours génial !!!",
  		loveIts: 0,
  		created_at: new Date()
  	},
  ];
  constructor() { }

  ngOnInit() {
  }

}
