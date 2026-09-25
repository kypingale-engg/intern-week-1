from sklearn.cluster import KMeans

# Customer data
# [Annual Income, Spending Score]
X = [
    [20, 20],
    [22, 25],
    [25, 22],
    [60, 75],
    [65, 80],
    [70, 78]
]

# Create K-Means model
model = KMeans(n_clusters=2, random_state=42, n_init=10)

# Find groups
model.fit(X)

# Get cluster labels
labels = model.labels_

print("Cluster Labels:")
print(labels)

print("\nCluster Centers:")
print(model.cluster_centers_)

# Predict cluster for a new customer
new_customer = model.predict([[30, 30]])

print("\nNew Customer Cluster:")
print(new_customer[0])