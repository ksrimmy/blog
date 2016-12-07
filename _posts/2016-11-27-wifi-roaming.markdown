---
layout: post
title:  "Wifi Roaming @ home"
date:   2016-11-27 16:11:23
permalink: wifi-roaming.html
comments: true
---
<span class="image featured"><img src="images/router.jpg" alt="just an access point"></span>
From time to time I stumble into discussions about mobile phones, which seem to stick with the first *Access Point* (AP) even if 
there are others with a way better connectivity characteristics.

At home I experienced the same issue with these so called *sticky clients*:\\
Sometimes my WIFI settings work just fine, but when I change a single setting some devices won't hand-over to the best available AP.
So let's try to find some explanations for this behaviour.
In the following I try to find some answers for this behaviour especially for home networks with multiple APs.
During research I realiced one thing - It's complicate!

# TL;DR

* Use the same settings with all APs.
* Change the distance between APs so that the signal strength of the distant AP exceeds -70 dBm at the target location (couch, place of work, etc.).
* Do not use poor designed clients. ;)

# My setup
First of all we have to be aware of the capabilities of the involed devices.
In my case I have four differernt APs in my network:

* a [Linksys WRT1900AC](http://www.linksys.com/us/p/P-WRT1900AC/)
* a [Linksys WRT54G](http://www.linksys.com/us/support-product?pid=01t80000003KXPxAAO)
* a [Netgear WGR614v9](https://www.netgear.com/support/product/WGR614v9.aspx?cid=wmt_netgear_organic)
* a [Xiamoi MiWifi](http://xiaomi-mi.com/mi-wifi/xiaomi-mi-wifi-router-3c-white/)

# Roaming standard amendments
All of the mentioned devices are infrastructure devices. They are designed for home usage.
As far as I know they do not support enterprise features like 

* [802.11k Expose AP information](https://en.wikipedia.org/wiki/IEEE_802.11k-2008)
* [802.11r Fast BSS transition (FT)](https://en.wikipedia.org/wiki/IEEE_802.11r-2008)
* [802.11v Exchange Information about network topology](https://en.wikipedia.org/wiki/IEEE_802.11v)

The k and the v standard help clients to find a better connection without enforcing the client to scan through the channels.
The r makes the roaming faster. Devices like the [iPhone support these features](https://support.apple.com/en-us/HT202628) 
for a long time. This sounds quite charming, but I am pretty sure that nothing of these is enabled within my home infrastructure,
but still (at least right now) my network works just fine. What else do we have?

# AP settings
At this point I want to mention that all the APs are configured with the same SSID, the same encryption method and the 
same PSK. I could not find any reference if this is really a must-have, but at least it cause less troubles with poorly 
designed clients as [this great post](http://superuser.com/questions/122441/how-can-i-get-the-same-ssid-for-multiple-access-points)
points out: 

*"Give both APs the same network name (SSID), the same security type (WPA2-PSK recommended), and the same wireless security passphrase. 
Many clients assume that these kinds of settings will be the same across all APs with the same SSID."*

# It's in the hand of the client

This brings us straight to the most important issue: *Roaming is triggered by the client*.

Per design it is a client decision when to roam. Some clients have highly sophisticated algorithms to find the right time,
other devices do a poor job and stick to the current network until they loose the connection.
But all of them have to do the following steps as [Andrew von Nagy mentioned](http://www.revolutionwifi.net/revolutionwifi/2011/12/wi-fi-roaming-analysis-part-1.html):

1. Passive / Active scanning in the background to identify other APs that are within range
2. Client roam triggers (exact algorithms are vendor proprietary, but are commonly based on signal strength thresholds, RSSI heuristics between APs, data rate shifting, retry and error rates)
3. Active scanning to confirm the new AP is still available
4. Roam to the new AP

It is hard to find a description about the used roaming triggers for most of the hardware vendors. 
I found [this documentation](https://support.apple.com/en-us/HT203068) for iOS 8 devices. 
It states that if the received signal strength exceeds -70 dBm the device will scan for other APs with a better signal.
I think this caused some of the unexpected behaviour in the past were I installed the APs at different locations.

# Conclusion
As far as I can see the problem with the [sticky clients](http://wifinigel.blogspot.co.at/2015/03/what-are-sticky-clients.html) 
does not relate to a lack of supported standards on the infrastructure side.
I'm pretty sure that I do not use any of the standards mentioned earlier but (at least right now) my network works pretty fine. 

To get data roaming to work you have to use the same SSID and the same security settings on all of your devices. 
If you still experience problems in such a setup I see two main sources for sticky clients:

1. Poorly designed clients.
2. Your APs are too close to each other so that clients do not see the need to roam (or to trigger a scan for other APs).

If you have anything to add, please leave a comment! I'm happy to learn and revise the text.