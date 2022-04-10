import { Component, OnInit } from '@angular/core';
import { Addon } from './addon';
import { AddonService } from './addon.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public addons: Addon[];
  public editAddon: Addon;
  public deleteAddon: Addon;

  constructor(private addonService: AddonService){}

  ngOnInit() {
    this.getAddons();
  }

  public getAddons(): void {
    this.addonService.getAddons().subscribe(
      (response: Addon[]) => {
        this.addons = response;
        console.log(this.addons);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddAdon(addForm: NgForm): void {
    document.getElementById('add-addon-form').click();
    this.addonService.addAddon(addForm.value).subscribe(
      (response: Addon) => {
        console.log(response);
        this.getAddons();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateAdon(addon: Addon): void {
    this.addonService.updateAddon(addon).subscribe(
      (response: Addon) => {
        console.log(response);
        this.getAddons();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAdon(addonId: number): void {
    this.addonService.deleteAddon(addonId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAddons();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchAddons(key: string): void {
    console.log(key);
    const results: Addon[] = [];
    for (const addon of this.addons) {
      if (addon.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || addon.price.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || addon.profile.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || addon.description.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(addon);
      }
    }
    this.addons = results;
    if (results.length === 0 || !key) {
      this.getAddons();
    }
  }

  public onOpenModal(addon: Addon, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAddonModal');
    }
    if (mode === 'edit') {
      this.editAddon = addon;
      button.setAttribute('data-target', '#updateAddonModal');
    }
    if (mode === 'delete') {
      this.deleteAddon = addon;
      button.setAttribute('data-target', '#deleteAddonModal');
    }
    container.appendChild(button);
    button.click();
  }



}
