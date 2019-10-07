import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { Crew } from '../../../products/crew/crew.component';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  @ViewChild('circleContainer') private circleContainer;

  public crewUsers: Crew[] = [];
  public userId: string = "1";


  public items = [
    {
      "imageName": "../assets/icons/CrewAvatar1.svg",
      "image_id": "CrewAvatar1.svg",
      "subImageName": "../assets/icons/orange-crew.svg"
    },
    {
      "imageName": "../assets/icons/CrewAvatar2.svg",
      "image_id": "CrewAvatar2.svg",
      "subImageName": "../assets/icons/blue-crew.svg"
    },
    {
      "imageName": "",
      "image_id": "CrewAvatar2.svg",
      "subImageName": ""
    },
    {
      "imageName": "../assets/icons/CrewAvatar5.svg",
      "image_id": "CrewAvatar3.svg",
      "subImageName": ""
    }

  ];
  constructor(private apiService: ApiService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'client',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/blue-crew.svg'));
    iconRegistry.addSvgIcon(
      'pnc',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/orange-crew.svg'));
  }

  ngOnInit() {
    this.getSolutionCrew();
  }

  getSolutionCrew() {
    this.apiService.solutionCrew(this.userId).subscribe(
      response => {
        this.crewUsers = response;
        this.rederStyles(this.crewUsers, this.crewUsers.length);
      },
      error => { });
  }

  getShortName(name) {
    return name && name.split(' ').length > 1 ? name.split(' ')[0].substring(0, 1) + name.split(' ')[1].substring(0, 1) : name.split(' ')[0].substring(0, 1);
  }

  rederStyles(items, itemLength) {
    let angle = (360 / itemLength);
    let rot = 225;
    let elementClass;
    let halfParent = '18em';
    items.forEach((x, i) => {
      if (rot >= 270 && rot <= 450) {
        elementClass = 'text-right';
      } else {
        elementClass = 'text-left';
      }
      x.liTransform = 'rotate(' + rot + 'deg) translate(' + halfParent + ') rotate(-' + rot + 'deg)';
      x.elementClass = elementClass;
      x.shortName = this.getShortName(x.name);
      rot = (rot + angle);
    });
    this.crewUsers = items;
  }
}
