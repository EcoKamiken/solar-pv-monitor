import matplotlib.pyplot as plt
import numpy as np
import base64

x = np.arange(0, 10, 0.01)
siny = np.sin(x)
cosy = np.cos(x)
tany = np.tan(x)
sinhy = np.sinh(x)
coshy = np.cosh(x)
tanhy = np.tanh(x)
asiny = np.arcsin(x)
acosy = np.arccos(x)
atany = np.arctan(x)

plt.plot(siny, '#138496', linewidth=6.0)
plt.plot(cosy, 'c')
plt.ylim(-5, 5)

plt.gca().spines['right'].set_visible(False)
plt.gca().spines['left'].set_visible(False)
plt.gca().spines['top'].set_visible(False)
plt.gca().spines['bottom'].set_visible(False)

plt.tick_params(
    axis='x',
    which='both',
    bottom=False,
    top=False,
    labelbottom=False
)

plt.tick_params(
    axis='y',
    which='both',
    left=False,
    right=False,
    labelleft=False
)

plt.savefig(
    fname="chart.png",
    dpi=72,
    transparent=True,
    bbox_inches='tight',
    pad_inches=0
)

with open('./chart.png', 'rb') as f:
    print(base64.urlsafe_b64encode(f.read()))