#!/usr/bin/python3

import numpy as np
import matplotlib.pyplot as plt
from urllib.parse import urlparse
import mysql.connector

url = urlparse('mysql://common:TeJO5AsR1HSD@192.168.11.107:3307/observer')

conn = mysql.connector.connect(
    host = url.hostname,
    port = url.port,
    user = url.username,
    password = url.password,
    database = url.path[1:],
)
cur = conn.cursor()
cur.execute('SELECT wattage from sensors where id=11 and created_at between "2018-11-23 00:00:00" and "2018-11-24 00:00:00"')

t = cur.fetchall()

x = np.arange(0, 1000, 1)
y = t
plt.plot(x, y)
plt.gca().spines['top'].set_visible(False)
plt.gca().spines['bottom'].set_visible(False)
plt.gca().spines['right'].set_visible(False)
plt.gca().spines['left'].set_visible(False)
plt.tick_params(labelbottom=False, labelleft=False)
plt.xticks(0, 0)

plt.savefig("chart.png")